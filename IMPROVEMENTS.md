# Improvements for HENNGE
We did actually make some improvements right in the code. We tried to align spaces, colors and sizes in some way with `CSS-variables`. This is because we wanted it to be as linear and united as possible when it comes to producing the real components.

We also took some creative freedom by having the `clip.svg` for attachments connected to the subject both on mobile and desktop, in order to make the design more responsive. Moving it from `date` on mobile and more to `subject` on desktop was not ideal.

Let's see what else we want to improve!

### Alignment
It's always a good thing to minimize the different specs a mockup might have and require to both decrease *time to market*, but also make the UI/UX-job easier by already having defined spaces etc. to re-use.

So, first improvement would be aligning space, font-size etc. in the sketch.

### "True" responsive
Even if this is a tricky product to build in some ways (because of the amount on information that needs to fit on small screens), we feel like it should be a proper responsive transition when it comes to assets, placements and compatibility.

For examples, icons are used on mobile for addresses *(from and to)* and also for date *(arrow-right)* but are nowhere to be seen on desktop. I could understand the icons for addresses not really fitting desktop like on mobile, but it would be nice to perhaps complement the sorting options with these icons to make the user recognize what is what when going from mobile to desktop. The icon next to date however could most definitely be part of desktop to further show that it's expandable to see the email body.

Also noticed that the sketch for mobile was done for a bigger variant of a mobile screen, which made it really cramped on i.e. iPhone 5/SE. Of course this would not be a problem if that is not a supported device, but we always like to go for the absolute smallest device and start from there to see what works.

We are also not a superbig fan of small font-sizes just to make content fit basically, since this affects Google rank and Lighthouse score negatively, so this was something we only did to match the sketch. A bigger font-size (16px across the board as smallest) on mobile should be part of the design-work from the start. If this is not something that really needs a great Google-score, then sure; small fonts look crisp and neat!

### Animations
This might be something that is not really part of improvement since it's really hard to show animations in mockups, but if we where to develop and finish this product we would definitely add subtle animations for expanding emails, sorting, loading etc. just to give users some feedback that stuff is happening.

### Free-text search
As a complement to the date-picker, we would also love a free-text search for allowing even more refinement if needed. This could be part of the date-picker so we keep just 1 submit/search function.

### Pagination
If we where to have more emails, we definitely would add some pagination to keep the view from being too cluttered. This would be a component both before and after the mail-list.

### Separate view for email
Depending on what you need from an email, it would be nice to provide a complementary feature per email that would open it separately in a new tab/window or as a modal. This would decrease the overwhelming mail-list from a lot of content to focus more on the actual content a user might need.

### A/B-test
One thing we would like to A/B-test if this was the finished product would be to have a date-picker that would not require a submit and simply change the content of the mail-list when a date is changed (and if the date is valid, of course).

This is also how we like to work, with MVP and getting stuff out there and then trying out other approaches for our already working and built functions. No point in trying to create the perfect solution from the start, since that just holds everyone back!

I guess there are a lot more to do with this specific product, but this list is what we came up with for now.

### お時間を取って頂きありがとうございます。
