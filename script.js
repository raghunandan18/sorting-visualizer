const n = 25;
const array= [];

function init() {
    array.length = 0; // Clear previous array
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100 
        array.push(randomNumber);
    }
    showbars();
}

function startBubble() {
    container.innerHTML = ''; // Clear previous bars
    // init();
    bubblesort(array);
    showbars();
}

function startSelection() {
    container.innerHTML = ''; // Clear previous bars
    // init();
    selectionSort(array);
    showbars();
}
function startInsertion() {
    container.innerHTML = ''; // Clear previous bars
    // init();
    insertionSort(array);
    showbars();
}
// function startQuick() {
//     container.innerHTML = ''; // Clear previous bars
//     quickSort(array);
//     showbars(); 
// }


function bubblesort(array){
    do{
        var swap = false;
        for (let i = 0; i < array.length-1; i++) {
            if (array[i] > array[i + 1]) {
                // Swap elements
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swap = true;
            }
        } 
    }while (swap);
}

function quickSort(array) {
    do{
        var swap = false;
        console.log("Unsorted array:", array);
        if (array.length <= 1) return array;

        const pivot = array[Math.floor(array.length / 2)];
        const left = [];
        const right = [];

        for (let i = 0; i < array.length; i++) {
            if (i === Math.floor(array.length / 2)) continue; // Skip the pivot
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
    }
    while (swap);
    console.log("Sorted array:", array);
}

function selectionSort(array) {
    do {
        var swap = false;
        for (let i = 0; i < array.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                // Swap elements
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
                swap = true;
            }
        }
    } while (swap);
}

function insertionSort(array) {
    do {
        var swap = false;
        for (let i = 1; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
                swap = true;
            }
            array[j + 1] = key;
        }
    } while (swap);
}

function showbars() {
    // const container = document.getElementById('container');
    container.innerHTML = ''; // Clear previous bars
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement('div');
        bar.style.height = array[i] * 5 +"px"; // Scale height for visibility  
        bar.classList.add('bar');
        container.appendChild(bar);
    }
}