function count(node) {
    let count = 1;
    let temp = node;
    while (temp.next !== node)  {
        count++;
        temp = temp.next;
    }
    return count;
}
function loop_size(node){
    let tortoise = node;
    let hare = node;

    while (tortoise !=null && hare!=null && hare.next!=null) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise == hare)   // cycle found
            return count(tortoise);  //start counting
    }

}
