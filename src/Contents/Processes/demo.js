module.exports = {
    toUpper: function (task) {
        var db = this.using('db');
        task.progress('coucou');
        task.end(task.payload.str.toUpperCase());
    }
}