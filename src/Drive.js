/**
 * The class represents a drive to transport the `pack` on the `route`.
 */
export default class Trans_Drive {
    /** @type {Trans_Api_Package} */
    #pack;
    /** @type {Trans_Api_Route} */
    #route;
    /** @type {Trans_Api_Logger} */
    #logger;

    /**
     * @param {Trans_Api_Package} pack
     * @param {Trans_Api_Route} route
     * @param {Trans_Api_Logger} logger
     */
    constructor(
        {
            Trans_Api_Package$: pack,
            Trans_Api_Route$: route,
            Trans_Api_Logger$: logger,
        }
    ) {
        this.#pack = pack;
        this.#route = route;
        this.#logger = logger;
    }

    execMission() {
        const r = this.#route;
        const { length, height, width } = this.#pack.getSize();
        this.#logger.print(`The package dimension (LxWxH): ${length}x${width}x${height}.`);
        this.#logger.print(`The package weight: ${this.#pack.getWeight()}.`);
        this.#logger.print(`The route: from '${r.getPlaceFrom()}' to '${r.getPlaceTo()}'.`);
    }

}