export default ( { whatsapp_link, twitter_link, facebook_link, instagram_link } ) =>
`<h2 class="w-full text-xl text-blue-dark mt-4 mb-4 text-center tracking-tight">Thank you for pledging</h2>
<h3 class="w-full w-full text-2xl text-blue-dark mb-4 text-center">Share with your friends</h3>
<div class="flex items-center justify-center mb-4">
    <a target="_blank" href="${whatsapp_link}" class="w-12 h-12 xl:w-16 xl:h-16 bg-white bg-no-repeat bg-center rounded-full" style="background-image:url(/images/whatsapp_logo_512.png);background-size:200%" target="_blank"></a>
    <a target="_blank" href="${twitter_link}" class="w-12 h-12 xl:w-16 xl:h-16 bg-white bg-no-repeat bg-center rounded-full" style="background-image:url(/svg/twitter.svg);background-size:60%" target="_blank"></a>
    <a target="_blank" href="${facebook_link}" class="w-12 h-12 xl:w-16 xl:h-16 bg-white bg-no-repeat bg-center rounded-full" style="background-image:url(/svg/facebook.svg);background-size:30%" target="_blank"></a>
</div>
<h3 class="w-full w-full text-2xl text-blue-dark mb-6 text-center">Help us reach 10,000!</h3>

<div class="flex items-center justify-between">
  <button
    class="pledge-form__submit bg-orange hover:bg-orange-shadow w-full text-white text-shadow font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Back to the pledge
  </button>
</div>
`;
