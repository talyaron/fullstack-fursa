package test.Amdocs;

public class LinkedList {
    class Node {
        private int value;
        private Node next;

        public Node(int value, Node next) {
            this.value = value;
            this.next = null;
        }

        public Node(Node other) {
            this.value = other.value;
            this.next = other.next;
        }

        public int getValue() {
            return value;
        }

        public void setValue(int value) {
            this.value = value;
        }

        public void setNext(Node next) {
            this.next = next;
        }

        public Node getNext() {
            return this.next;
        }

    }

    private Node head;
    private int size;


    public LinkedList(Node head) {
        this.head = new Node(head);
        head.setNext(null);
        this.size = 0;
    }

    public void add(Node add) {
        if (head == null) {
            this.head = new Node(add);
            this.size++;
            return;
        }
        Node n;
        for (n = head; n.getNext() != null; n = n.getNext()) {
        }
        n.setNext(add);
        this.size++;
    }

    public void delete(Node del) {
        Node prev = head;
        // 1 2 3 5 6 7 8 9 10 11 delete(3)
        if (del.equals(head)) {
            this.head = this.head.getNext();
            return;
        }
        if (this.size > 2)
            for (Node n = head.getNext().getNext(); prev != null; n = n.getNext(), prev = n.getNext()) {
                if (prev.getNext().equals(del)) {
                    prev.setNext(n);
                    this.size--;
                    return;
                }
            }
    }
}
