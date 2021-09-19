// const shape = [4,2];
// //const data = tf.tensor([[4,6],[5,9],[13,25],[1,57]]);
// const data = tf.tensor([4,6,5,9,13,25,1,57], shape);

// // set variables with zeros method
// const data2 = tf.variable(tf.zeros([8]));

// // print the data
// data2.print();

// //this is where we assign new values with 1 dimension
// data2.assign(tf.tensor1d([4,12,5,6,56,3,45, 3]));
// data2.print();

// //Creating 2 new 1 demensional tensors
// const data3 = tf.tensor1d([4,6,5,9]);
// const data4 = tf.tensor1d([6,2,5,84]);

// //prints 
// data3.print();
// data4.print();


// // adds and multiplies and prints
// data3.add(data4).print();
// data3.mul(data4).print();




// define my model
// function simpleAdd(input1, input2) {
//     // tidy is used to free up GPU memory once
//     // the functions returns 
//     return tf.tidy(() =>    {
//         const x1 = input1;
//         const x2 = input2;
//         const y = x1.add(x2);
//         return y;
//     });

// }

// const data1 = tf.tensor1d([4,6,5,9]);
// const data2 = tf.tensor1d([7,86,95,9]);

// const result = simpleAdd(data1, data2);
// result.print();

const model = tf.sequential();

model.add(
    tf.layers.simpleRNN({
        // only needed first layer
        inputShape: [20, 4],
        // the number of units of neurons
        units: 20, 
        // weight
        recurrentINitializer: 'GlorotNormal',

    })
);
