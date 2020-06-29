export default ({ target, member_count}) => `
<h3 class="w-full text-2xl text-blue-dark mb-1 leading-tight text-center">Help us reach ${numberWithCommas(target)}!</h3>
<p class="text-black text-center">${numberWithCommas(member_count)} have pledged so far</p>
`;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
