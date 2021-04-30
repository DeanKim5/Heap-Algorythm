class Heap{
    constructor(){
        this.data = [];
    }

    getParentIndex(i){

        return Math.floor(x:(i-1)/2);
    }

    getLeftChildIndex(i){

        return i*2+1;
    }

    getRightChildIndex(i){

        return i*2+2;
    }

    swap(i1,i2){


        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    Push(key){
        this.data[this.data.length] = key;
        this.heapifyUp();

    }

    heapifyUp(){

        let currentIndex = this.data.length -1;

        while(this.data[currentIndex]>this.data[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex,this.getParentIndex(currentIndex));

            currentIndex = this.getParentIndex(currentIndex);

        }
    }
    poll(){

        const maxValue = this.data[0];
        this.data[0] = this.data[this.data.length-1];

        this.data.length--;
        heapifyDown();

        return maxValue;

    }
    
    heapifyDown(){

        let currentIndex = 0;

        while(this.data[this.getLeftChildIndex(currentIndex)]){


            let biggestChildIndex = this.getLeftChildIndex(currentIndex);
        
            if(this.data[this.getRightChildIndex(currentIndex)] != undefined
            && this.data[this.getRightChildIndex(currentIndex)]
            > this.data[this.getLeftChildIndex(currentIndex)]{
                biggestChildIndex = this.getRightChildIndex(currentIndex);

            }

            if(this.data[currentIndex]<this.data[biggestChildIndex]){

                this.swap(currentIndex,biggestChildIndex);
                currentIdnex = biggestChildIndex;
            } else {

                return;
            }
        }

    }
}


const heap = new Heap();
console.log(heap);
heap.Push(25);
heap.Push(5);
heap.Push(40);
heap.Push(78);
heap.Push(87);
heap.Push(44);
heap.Push(35);

console.log(heap.data.join(','));

//let a 