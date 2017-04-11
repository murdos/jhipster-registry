export class Route {
    constructor(
        public path: string,
        public prefix: string,
        public appName: string,
        public active: string,
        public status: string,
        public serviceId: string,
        public serviceInstances: any[]
    ) { }
}
