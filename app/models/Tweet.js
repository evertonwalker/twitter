class Tweet {
    constructor(id, message, name_user, date) {
        this.id = id;
        this.message = message;
        this.name = name_user;
        this.date = new Date(date);
    }
}

module.exports = Tweet;