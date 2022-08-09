require("../models/User");
require("../models/Item");
require("../models/Comment");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Item = mongoose.model("Item");
const Comment = mongoose.model("Comment");
const slug = require("slug");
mongoose.connect(process.env.MONGODB_URI);

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
    console.log("Successfully saved user");
  });
  let currItem = createItem(i, currUser);
  currItem.save(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Successfully saved item");
  });
  let currComment = createComment(i, currUser, currItem);
  currComment.save(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Successfully saved comment");
  });
}
