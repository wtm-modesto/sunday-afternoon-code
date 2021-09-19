// // 1 dimensional tensors
// const data3 = tf.tensor1d([4,6,5,9]);
// const data4 = tf.tensor1d([11,23,7,6]);
//  data3.print();
//  data4.print();
// // adds and multiplies and prints
//  data3.add(data4).print();
//  data3.mul(data4).print();


// define my model

// function simpleAdd (input1, input2) {
//     return tf.tidy(() => {
//     const x1 = input1;
//     const x2 = input2;
//     const y = x1.add(x2);
//     return y;
// })};
    

// const data1 = tf.tensor1d([4,5,6,9]);

// const data2 = tf.tensor1d([1,5,6,9]);

// const result = simpleAdd(data1, data2);

// result.print();

// github.com/tensorflow/tfjs-examples

// sequential model
const model = tf.sequential();

model.add(
    tf.layers.simpleRNN({
        inputShape: [20,4],
        units: 20,
        recurrentInitializer: 'GlorotNormal',
    })
);

