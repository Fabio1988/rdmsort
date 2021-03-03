import 'alpinejs';
import { Sortable } from '@shopify/draggable';
import VirtualScroller from 'virtual-scroller/dom';
import ScrollableContainer from "virtual-scroller/source/DOM/ScrollableContainer";
import Screen from "virtual-scroller/source/DOM/Screen";

window.language = 'de';

window.pokemonData = function() {
    return {
        pokemon: [],
        selectedPokemon: [],
        showImages: true,
        showModal: false,
        importIds: '',
        initPokemon() {
            this.$watch('showImages', value => {
                this.buildList();
            });

            fetch('resources/' + language + '.json')
                .then(response => response.json())
                .then(data => {
                    if(data) {
                        this.pokemon = data;

                        this.buildList();
                        return;
                    }

                    return Promise.reject(response.data);
                })
                .catch(error => {
                    console.log('Failed to fetch pokemon...', error);
                });

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
        renderItem(item) {
            // Item element.
            const root = document.createElement('div');
            root.setAttribute('class', 'pokemon-item group hover:bg-green-500 relative');

            if(this.showImages) {
                // Item image.
                const img = document.createElement('img');
                img.setAttribute('src', `/img/${item.id}.png`);
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
            addButton.textContent = `Add ${item.name}`;
            add.appendChild(addButton);

            root.appendChild(add);

            // Return message element.
            return root;
        },
        buildList() {
            document.getElementById("container") && document.getElementById("container").remove();
            this.buildContainer();

            const scrollableContainer = document.getElementById('itemContainer');

            const virtualScroller = new VirtualScroller(
                document.getElementById('container'),
                this.pokemon,
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
            listItem.setAttribute('class', 'relative flex flex-row justify-start items-center min-w-64');
            listItem.setAttribute('data-id', item.id);

            const img = document.createElement('img');
            img.setAttribute('src', `/img/${item.id}.png`);
            img.setAttribute('alt', item.name);
            img.setAttribute('class', 'h-16 w-16 object-fit mr-6')
            listItem.appendChild(img);

            const itemName = document.createElement('span');
            itemName.innerHTML = `<span class="text-green-600 inline-block w-12">#${item.id}</span> ${item.name}`;

            // Item generation.
            const generation = document.createElement('span');
            generation.setAttribute('class', 'absolute rounded-full bg-green-500 text-xs text-green-900 px-2 py-1 right-0 mr-2');
            generation.textContent = `Generation ${item.gen}`;

            listItem.appendChild(itemName);
            listItem.appendChild(generation);

            document.querySelector('ul#selectedItems').appendChild(listItem);
        },
        importPokemon() {
            console.log('importing');
            let selectedItems = [];

            this.importIds.split("\n").forEach(id => {
                const item = this.pokemon.find(pk => parseInt(pk.id) === parseInt(id));

                selectedItems.push({
                    id: item.id,
                    name: item.name,
                    gen: item.gen
                });

                this.appendItemToList(item);
            });

            this.selectedPokemon = selectedItems;

            this.showModal = false;
            this.importIds = '';
        },
        exportPokemon() {
            const el = document.createElement('textarea');
            //el.setAttribute('class', 'hidden');
            el.value = this.selectedPokemon.map(item => {
                return item.id;
            }).join("\n");
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            alert('Copied to your clipboard.');
        }
    };
}