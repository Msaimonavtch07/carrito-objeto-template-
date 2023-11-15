// console.log("bienvenido🍃");

const url = 'https://jsonplaceholder.typicode.com/posts/';

const findPostById = async (id) => {
    try {
        
        const res = await fetch(url + id);
        const post = await res.json();

        console.log(post);

    } catch (error) {
        console.log(error);
    }
}
findPostById(25)


//fetch(url)
//    .then((res) => res.json())
//    .then((data) => console.log(data))
//    .catch((e) => console.log(e))
//    .finally(console.log('finalizado el procedimiento'))










//const findPostById = (id) => {
//    const post = posts.find(item => item.id === id);

//    return new Promise((resolve, reject) => {
//        if (post) {
//            resolve(post);
//       } else {
//            reject('no se encontro el post con id 👉 ' + id);
//        }
//    }); 
//;};

//const findPostById = (id) => 
//    new Promise((resolve, reject) => {
    
//    setTimeout(() => {
//        const post = posts.find(item => item.id === id);
    
//        if (post) {
//            resolve(post);
//       } else {
//            reject('no se encontro el post con id 👉 ' + id);
//        }
//    }, 2000);
//    }); 


// findPostById(1)
//    .then((post) => console.log(post))
//    .catch((e) => console.log(e));

//const buscar = async () => {
//     try {
//        const rePost = await Promise.all([
//            findPostById(1),
//            findPostById(2),
//        ])
//        console.log(rePost)
        
        // const postUno = await findPostById(1)
        // const postDos = await findPostById(1)
        // console.log(postUno.title, postDos.title)

//     } catch (error) {
//        console.log(error)
//     } finally {
//        console.log('esto se ejecuta si o si...')
//     }
//};

//buscar()
//console.log('fin del codigo...')    






//   findPostById(1)
//    .then((post) => {
//        console.log(post)
//        return findPostById(2)
//    })
//    .then((post) => {
//        console.log(post)
//        return findPostById(3)
//    })
//    .then((post) => {
 //       console.log(post)
//        return findPostById(4)
//    })
//    .catch((e) => console.log(e))





    



// const findPostById = (id, callback) => {
     
//     const post = posts.find(item => item.id === id);

//     if (post) {
//         callback(null, post);    
//     } else {
//       callback('no se encontro el post con id ' +id);
//     }

// };

//findPostById(1, (err, post) => {
//    if (err) {
//        return console.log(err);
//    };
//    console.log(post);

//    findPostById(2, (err, post) => {
//       if (err) {
//            return console.log(err);
//        };
//        console.log(post);

//        findPostById(3, (err, post) => {
//            if (err) {
//                return console.log(err);
//            };
//            console.log(post);

//            findPostById(4, (err, post) => {
//                if (err) {
//                    return console.log(err);
//                };
//                console.log(post);
//            });
//        });
//    });
//});

