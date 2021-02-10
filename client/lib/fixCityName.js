export default function fixCityName(city) {
  const split = city.split('');
  const map = split.map(index => index === " " || index === "," ? index="%20" : index);
  const fixedName = map.join('');
  return fixedName;
}
