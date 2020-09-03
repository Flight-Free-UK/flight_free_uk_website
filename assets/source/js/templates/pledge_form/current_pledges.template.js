export default ({ target, member_count}) => `
<h3 class="w-full text-lg text-blue-dark mb-1 leading-tight text-center">I will be flight free in ${new Date().getFullYear()}</h3>
<p class="text-blue-dark text-center">Help us reach ${numberWithCommas(target)}!</p>
<p class="text-blue-dark text-center">${numberWithCommas(member_count)} have pledged so far</p>
`;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
