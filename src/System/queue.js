module.exports = {
    demo: {
        toUpper: function (task, msg) {
            //console.log(task);
            msg.emit(task);
        }
    }
}