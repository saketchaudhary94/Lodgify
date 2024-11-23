const Review = require("../models/reviews");
const Listing = require("../models/listing");

// post route callback 
module.exports.createReview = async(req , res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    await newReview.save();
    listing.reviews.push(newReview);
    await listing.save();
    req.flash("success" , "New Review  Created!");
    res.redirect(`/listings/${listing._id}`);
};

// delete route callback 
module.exports.destroyReview = async(req , res)=>{
    let{id , reviewId} = req.params;
    await Listing.findByIdAndUpdate(id , {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success" , " Review  Deleted!");
    res.redirect(`/listings/${id}`);
};