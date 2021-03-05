import 'alpinejs';
import { Sortable } from '@shopify/draggable';
import VirtualScroller from 'virtual-scroller/dom';
import ScrollableContainer from "virtual-scroller/source/DOM/ScrollableContainer";
import Screen from "virtual-scroller/source/DOM/Screen";

window.pokemonData = function() {
    return {
        pokemon: [],
        filteredGeneration: [],
        selectedPokemon: [],
        selectedGeneration: null,
        availableGenerations: [],
        selectedLanguage: 'de',
        availableLanguages: ['de', 'en'],
        showImages: true,
        showModal: false,
        importIds: '',
        translations: {},
        initPokemon() {
            this.$watch('showImages', value => {
                this.buildList();
            });

            this.$watch('selectedGeneration', value => {
                this.filterGeneration(value);
            });

            this.loadLanguageResource();

            const sortable = new Sortable(document.querySelector('ul#selectedItems'), {
                draggable: 'li'
            });

            sortable.on('sortable:stop', e => {
                setTimeout(() => {
                    let sortedList = [];
                    const listElements = document.querySelector('ul#selectedItems').querySelectorAll('li');

                    listElements.forEach(element => {
                        const id = parseInt(element.getAttribute('data-id'));
                        const foundElement = this.pokemon.filter(pokemon => {
                            return parseInt(pokemon.id) === id;
                        });

                        if(foundElement.length > 0) {
                            const item = foundElement[0];

                            sortedList.push({
                                id: item.id,
                                name: item.name,
                                gen: item.gen
                            });
                        }
                    });

                    this.selectedPokemon = sortedList;
                }, 2);
            });
        },
        buildGenerationSelectionList() {
            this.availableGenerations = [...new Set(this.pokemon.map(item => item.gen))];
        },
        loadLanguageResource(updateSelected = false) {
            fetch('resources/translations_' + this.selectedLanguage + '.json')
                .then(response => response.json())
                .then(data => {
                    if(data) {
                        this.translations = data;

                        fetch('resources/' + this.selectedLanguage + '.json')
                            .then(response => response.json())
                            .then(data => {
                                if(data) {
                                    this.pokemon = data;
                                    this.filteredGeneration = this.pokemon;

                                    if(updateSelected) {
                                        this.updateSelectedPokemon();
                                    }

                                    this.buildGenerationSelectionList();

                                    this.buildList();
                                    return;
                                }

                                return Promise.reject(response.data);
                            })
                            .catch(error => {
                                console.log('Failed to fetch pokemon...', error);
                            });
                        return;
                    }

                    return Promise.reject(response.data);
                })
                .catch(error => {
                    console.log('Failed to fetch translations...', error);
                });
        },
        changeLanguage(lang) {
            if (this.availableLanguages.indexOf(lang) > -1) {
                this.selectedLanguage = lang;

                this.loadLanguageResource(true);
            }
        },
        updateSelectedPokemon() {
            document.querySelector('ul#selectedItems').querySelectorAll('li').forEach(item => item.remove());

            this.importIds = this.selectedPokemon.map(pk => {
                return pk.id;
            }).join("\n");
            this.importPokemon();
        },
        renderItem(item) {
            // Item element.
            const root = document.createElement('div');
            root.setAttribute('class', 'pokemon-item group hover:bg-green-500 relative');

            if(this.showImages) {
                // Item image.
                const img = document.createElement('img');
                img.setAttribute('src', `img/${item.id}.png`);
                img.setAttribute('alt', item.name);
                img.setAttribute('class', 'h-16 w-16 object-fit')
                root.appendChild(img);
            }

            // Item name.
            const itemName = document.createElement('span');
            if(!this.showImages) {
                itemName.setAttribute('class', 'px-3 py-2');
            } else {
                itemName.setAttribute('class', 'pl-4 text-sm');
            }
            itemName.innerHTML = `<span class="text-green-600">#${item.id}</span> ${item.name}`;
            root.appendChild(itemName);

            // Item generation.
            const generation = document.createElement('span');
            generation.setAttribute('class', 'absolute rounded-full bg-green-500 text-xs text-green-900 px-2 py-1 right-0 mr-2');
            generation.textContent = `Generation ${item.gen}`;
            root.appendChild(generation);

            // Item add.
            const add = document.createElement('button');
            add.setAttribute('class', 'hidden group-hover:flex w-full justify-center items-center absolute top-0 bottom-0 left-0 right-0 transform z-50 bg-primary-75 cursor-pointer');
            add.addEventListener('click', e => {
                e.preventDefault();

                const hasItem = this.selectedPokemon.filter(pokemon => {
                    return parseInt(pokemon.id) === parseInt(item.id);
                });

                if(hasItem.length > 0) {
                    console.log('Pokemon already added to list.');
                    return;
                }

                this.selectedPokemon.push({
                    id: item.id,
                    name: item.name,
                    gen: item.gen
                });

                this.appendItemToList(item);
            });

            // Item add.
            const addButton = document.createElement('span');
            addButton.setAttribute('class', 'inline-block text-green-800 font-bold text-sm');
            addButton.textContent = this.translations.add.replace('%s', item.name);
            add.appendChild(addButton);

            root.appendChild(add);

            // Return message element.
            return root;
        },
        filterGeneration(value) {
            if (value === '' || value === null) {
                this.filteredGeneration = this.pokemon;
            } else {
                this.filteredGeneration = this.pokemon.filter(item => parseInt(item.gen) === parseInt(value));
            }

            this.buildList();
        },
        buildList() {
            document.getElementById("container") && document.getElementById("container").remove();
            this.buildContainer();

            const scrollableContainer = document.getElementById('itemContainer');

            const virtualScroller = new VirtualScroller(
                document.getElementById('container'),
                this.filteredGeneration,
                this.renderItem.bind(this),
                {
                    scrollableContainer,
                    renderingEngine: {
                        name: 'Non-DOM Rendering Engine',
                        createScreen() {
                            return new Screen()
                        },
                        createScrollableContainer(scrollableContainer) {
                            return new ScrollableContainer(scrollableContainer)
                        }
                    }
                }
            )
        },
        buildContainer() {
            let containerEl = document.createElement('div');
            containerEl.setAttribute('id', 'container');
            containerEl.setAttribute('class', '');
            document.getElementById('itemContainer').appendChild(containerEl);
        },
        appendItemToList(item) {
            let listItem = document.createElement('li');
            listItem.setAttribute('class', 'relative flex flex-row justify-start items-center min-w-64 group cursor-move');
            listItem.setAttribute('data-id', item.id);

            const img = document.createElement('img');
            img.setAttribute('src', `img/${item.id}.png`);
            img.setAttribute('alt', item.name);
            img.setAttribute('class', 'h-16 w-16 object-fit mr-6')
            listItem.appendChild(img);

            const itemName = document.createElement('span');
            itemName.innerHTML = `<span class="text-green-600 inline-block w-12">#${item.id}</span> ${item.name}`;

            // Item generation.
            const generation = document.createElement('span');
            generation.setAttribute('class', 'absolute rounded-full bg-green-500 text-xs text-green-900 px-2 py-1 right-0 mr-2 z-10');
            generation.textContent = `Generation ${item.gen}`;

            // Item generation.
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('class', 'hidden group-hover:block absolute rounded-full bg-red-500 hover:bg-red-700 text-xs text-white px-8 py-1 right-0 mr-2 z-20');
            deleteButton.setAttribute('data-id', item.id);
            deleteButton.textContent = this.translations.delete;
            deleteButton.addEventListener('click', e => {
                deleteButton.closest('li').remove();
                this.selectedPokemon = this.selectedPokemon.filter(pk => {
                    return parseInt(pk.id) !== parseInt(deleteButton.getAttribute('data-id'));
                });
            });

            listItem.appendChild(itemName);
            listItem.appendChild(generation);
            listItem.appendChild(deleteButton);

            document.querySelector('ul#selectedItems').appendChild(listItem);
        },
        openImportModal() {
            this.showModal = true;
            this.selectedPokemon = [];
            document.querySelector('ul#selectedItems').querySelectorAll('li').forEach(item => item.remove());
        },
        importPokemon() {
            let selectedItems = [];

            this.importIds.trim().replace(/ /g, '').replace(/,/g, '').split("\n").forEach(id => {
                if(this.isNumeric(id)) {
                    const item = this.pokemon.find(pk => parseInt(pk.id) === parseInt(id));

                    selectedItems.push({
                        id: item.id,
                        name: item.name,
                        gen: item.gen
                    });

                    this.appendItemToList(item);
                }
            });

            this.selectedPokemon = selectedItems;

            this.showModal = false;
            this.importIds = '';
        },
        exportPokemon() {
            if (this.selectedPokemon.length <= 0) {
                alert(this.translations.select_pokemon_first);
                return;
            }

            const el = document.createElement('textarea');
            //el.setAttribute('class', 'hidden');
            el.value = this.selectedPokemon.map(item => {
                return item.id;
            }).join("\n").trim();
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            alert(this.translations.copied);
        },
        isNumeric(str) {
            if (typeof str != "string") return false // we only process strings!
            return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
                !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
        }
    };
}