

//creating an array containing 4 arrays of two numbers per array
//const dataA = tf.tensor([[4,6],[5,9],[13,25],[1,57]]);
//dataA.print();

/*
//shape tensor with 4 rows of 2 columns
const shape = [4,2];
//feed data into the tensor
const data = tf.tensor([4,6,5,9,13,25,1,57], shape);

// set variables with zero method
const data2 = tf.variable(tf.zeros([8]));

//print the data
data.print();
data2.print();

// assign new values with one dimension
data2.assign(tf.tensor1d([4,12,5,6,56,3,45,3]));
data2.print();


// adding two tensors
const data3 = tf.tensor1d([4,6,5,9]);
const data4 = tf.tensor1d([11,23,7,6]);
data3.print();
data4.print();

// adding two tensors
data3.add(data4).print();

// multiplying two tensors
data3.mul(data4).print();
*/




/*
// define model

function simpleAdd(input1, input2){
    // tidy is used to free up GPU memory once the function returns
    return tf.tidy( () => {
        const x1 = input1;
        const x2 = input2;
        const y = x1.add(x2);
        return y;
    });
}

// creating new 1 dimensional tensor
const data1 = tf.tensor1d([4,6,5,9]);
const data2 = tf.tensor1d([5,4,34,21]);

const result = simpleAdd(data1, data2);

result.print();
*/



// sequential model
const model = tf.sequential();

model.add(
    tf.layers.simpleRNN({
        // shape is only needed for first layer
        inputShape: [20,4],
        // the number of units or neurons
        units: 20,
        // weight
        recurrentInitializer: 'GloroNormal'
    })
);

