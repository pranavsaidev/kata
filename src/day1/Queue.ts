type Node<T> = {
    value: T,
    next?: Node<T>,
};

export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.tail = this.head = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node: Node<T> = { value: item }

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const h = this.head;
        this.head = this.head.next;
        h.next = undefined;

        this.length--;
        if (this.length === 0) {
            this.tail = undefined;
        }

        return h.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}