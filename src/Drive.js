/**
 * The class represents a drive to transport the `pack` on the `route`.
 */
export default class Trans_Drive {
    /** @type {Trans_Api_Package} */
    #pack;
    /** @type {Trans_Api_Route} */
    #route;

    /**
     * @param {Trans_Api_Package} pack
     * @param {Trans_Api_Route} route
     */
    constructor(
        {
            Trans_Api_Package$: pack,
            Trans_Api_Route$: route,
        }
    ) {
        this.#pack = pack;
        this.#route = route;
    }

    execMission() {
        const r = this.#route;
        const {length, height, width} = this.#pack.getSize();
        console.log(`The package dimension (LxWxH): ${length}x${width}x${height}.`);
        console.log(`The package weight: ${this.#pack.getWeight()}.`);
        console.log(`The route: from '${r.getPlaceFrom()}' to '${r.getPlaceTo()}'.`);
    }

}