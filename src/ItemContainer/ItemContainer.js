// @flow
import { Container } from 'unstated';
import consecutive from 'consecutive';

export type StoreState = {
    uuid: string | number,
};

let nextUuid = consecutive();
export function resetNextUuid() {
    nextUuid = consecutive();
}

class ItemContainer extends Container<StoreState> {
    constructor(args?: $Shape<StoreState> = {}) {
        super();
        this.state = {
            uuid: nextUuid(),
            ...args,
        };
    }

    setUuid(customUuid: string) {
        return this.setState({
            uuid: customUuid,
        });
    }
}

export default ItemContainer;
