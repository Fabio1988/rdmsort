import 'alpinejs';
import VirtualScroller from 'virtual-scroller/dom';
import ScrollableContainer from "virtual-scroller/source/DOM/ScrollableContainer";
import Screen from "virtual-scroller/source/DOM/Screen";

const domReady = (callBack) => {
    if (document.readyState === "loading") {
        document.addEventListener('DOMContentLoaded', callBack);
    }
    else {
        callBack();
    }
}

window.language = 'de';

window.pokemonData = function() {
    return {
        pokemon: [],
        showImages: true,
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
        }
    };
}