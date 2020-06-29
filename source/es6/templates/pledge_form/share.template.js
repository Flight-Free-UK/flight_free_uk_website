export default ( { whatsapp_link, twitter_link, facebook_link, instagram_link } ) =>
`<h2 class="w-full text-2xl text-orange mb-1 text-center tracking-tight">Thank you for pledging</h2>
<h3 class="w-full text-1xl text-blue-dark mb-2 text-center">Share with your friends!</h3>
<div class="flex">
    <a href="${whatsapp_link}" class="w-12 h-12 xl:w-16 xl:h-16 bg-white bg-no-repeat bg-center rounded-full" style="background-image:url(/images/whatsapp_logo_512.png);background-size:200%" target="_blank"></a>
    <a href="${whatsapp_link}" class="flex-initial text-gray-700 text-center py-3 m-2">Share via WhatsApp</a>
</div>
<div class="flex">
    <a href="${twitter_link}" class="w-12 h-12 xl:w-16 xl:h-16 bg-white bg-no-repeat bg-center rounded-full" style="background-image:url(/svg/twitter.svg);background-size:60%" target="_blank"></a>
    <a href="${twitter_link}" class="flex-initial text-gray-700 text-center py-3 m-2">Tweet to your followers</a>
</div>
<div class="flex">
    <a href="${facebook_link}" class="w-12 h-12 xl:w-16 xl:h-16 bg-white bg-no-repeat bg-center rounded-full" style="background-image:url(/svg/facebook.svg);background-size:30%" target="_blank"></a>
    <a href="${facebook_link}" class="flex-initial text-gray-700 text-center py-3 m-2">Post to Facebook</a>
</div>
<div class="flex">
    <a href="${instagram_link}" class="w-12 h-12 xl:w-16 xl:h-16 bg-white bg-no-repeat bg-center rounded-full" style="background-image:url(/images/instagram.png);background-size:60%" target="_blank"></a>
    <a href="${instagram_link}" class="flex-initial text-gray-700 text-center py-3 m-2">Share on Instagram</a>
</div>`;