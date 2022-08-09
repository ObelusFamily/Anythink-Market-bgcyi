require("../models/User");
require("../models/Item");
require("../models/Comment");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Item = mongoose.model("Item");
const Comment = mongoose.model("Comment");
const slug = require("slug");
mongoose.connect(process.env.MONGODB_URI);

/*
Item.deleteMany({}).catch(function(err){console.log(err)});
User.deleteMany({}).catch(function(err){console.log(err)});
Comment.deleteMany({}).catch(function(err){console.log(err)});
*/
createUser = function (index) {
  var user = new User();
  user.username = `user${index}`;
  user.email = `email${index}@gmail.com`;
  user.setPassword(`password${index}`);
  user.bio = "";
  return user;
};

createItem = function (index, seller) {
  var item = new Item();
  item.title = `item${index}`;
  item.description = `description${index}`;
  item.slug = slug(item.title);
  item.seller = seller;
  return item;
};

createComment = function (index, seller, item) {
  var comment = new Comment();
  comment.body = `comment${index}`;
  comment.seller = seller;
  comment.item = item;
  return comment;
};

for (let i = 0; i < 100; i++) {
  let currUser = createUser(i);
  currUser.save(function (err) {
    if (err) {
      console.log(err);
      return;
    }
  });
  let currItem = createItem(i, currUser);
  currItem.save(function (err) {
    if (err) {
      console.log(err);
      return;
    }
  });
  let currComment = createComment(i, currUser, currItem);
  currComment.save(function (err) {
    if (err) {
      console.log(err);
      return;
    }
  });
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

delay(10000).then(() => {
  console.log("done");
  mongoose.connection.close();
});
