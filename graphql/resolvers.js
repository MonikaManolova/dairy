const Event = require('../models/Event');

module.exports = {
    getStories: () => {
        return Event.find()
            .then(events => {
                return events.map(event => {
                    return { ...event._doc, _id: event.id };
                });
            })
            .catch(err => {
                throw err;
            });
    },
    getStory: (_id) => {
        return Event.findById(_id)
            .then((event) => {
                return { ...event._doc }
            }).catch(err => {
                err => console.error(err)
            });
    },
    createStory: (args) => {
        const event = new Event({
            title: args.storyInput.title,
            description: args.storyInput.description,
            color: args.storyInput.color,
            fontSize: args.storyInput.fontSize,
            theme: args.storyInput.theme
        });
        return event
            .save()
            .then(result => {
                console.log(result);
                return { ...result._doc, _id: result.id };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    },
    deleteStory: (args) => {
        return Event.findByIdAndDelete(args._id)
            .then(event => event.remove())
            .then(() => `${args._id} successfully deleted`)
            .catch(err => console.error(err));
    },
    editStory: (input) => {
        const { _id, ...rest } = input;
        return Event.findByIdAndUpdate(_id, { $set: rest }, { new: true }).catch(
            err => console.error(err)
        );
    }
}