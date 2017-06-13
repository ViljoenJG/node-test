module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 30)
};

module.exports.square = x => x * x;
module.exports.asuncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x * x)
    }, 30)
};

module.exports.setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};