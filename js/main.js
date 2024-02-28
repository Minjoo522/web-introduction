const movies = [
  {
    rank: 1,
    title: '스파이더맨: 노 웨이 홈',
    poster: '../images/spiderman.jpeg',
    description:
      '‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…',
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A8%3A+%EB%85%B8+%EC%9B%A8%EC%9D%B4+%ED%99%88&oquery=%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%8D%94%EB%A7%A8%3A+%EB%85%B8+%EC%9B%A8%EC%9D%B4+%ED%99%88+%EC%A0%95%EB%B3%B4&tqi=iOJ9Idqo15wssnp3su4ssssstLd-370560',
  },
  {
    rank: 2,
    title: '라라랜드',
    poster: '../images/lalarand.jpeg',
    description:
      '꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈 피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마 스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다.',
    url: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_clk.sym&mra=bjVI^bkEw&x_csa=%7B%22theme%22%3A%22movie%22%2C%22ptn%22%3A%22osolution_top%22%2C%22pkid%22%3A%2268%22%2C%22osid%22%3A%222324869%22%2C%22skipOsid%22%3A%2233684202%22%2C%22research%22%3A%220%22%2C%22oOs%22%3A%2219177982%22%2C%22topic%22%3A%22%EC%98%81%ED%99%94%22%7D&pkid=68&os=2324869&qvt=0&query=%EC%98%81%ED%99%94%EB%9D%BC%EB%9D%BC%EB%9E%9C%EB%93%9C&x_bifrost=%7B%22theme%22%3A%22movie%22%2C%22pkid%22%3A%2268%22%2C%22os%22%3A%222324869%22%7D',
  },
  {
    rank: 3,
    title: '플립',
    poster: '../images/flipped.jpeg',
    description:
      '새로 이사 온 미소년 브라이스를 보고 첫눈에 사랑을 직감한 7살 소녀 줄리. 솔직하고 용감한 줄리는 자신의 마음을 적극적으로 표현하지만 브라이스는 그런 줄리가 마냥 부담스럽다. 줄리의 러브빔을 요리조리 피해 다니기를 6년! 브라이스는 줄리에게 받은 달걀을 쓰레기통에 버리다 들키고, 화가 난 줄리는 그날부터 브라이스를 피하기 시작한다. 하지만 성가신 그녀가 사라지자 브라이스는 오히려 전 같지 않게 줄리가 신경 쓰이기 시작하는데…',
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EC%98%81%ED%99%94%ED%94%8C%EB%A6%BD&oquery=%ED%94%8C%EB%A6%BD&tqi=iO8vLsqo1e8ssRmD4vwssssst10-392008',
  },
  {
    rank: 4,
    title: '인사이드아웃',
    poster: '../images/insideout.jpeg',
    description:
      '모든 사람의 머릿속에 존재하는 감정 컨트롤 본부 그곳에서 불철주야 열심히 일하는 기쁨, 슬픔, 버럭, 까칠, 소심 다섯 감정들. 이사 후 새로운 환경에 적응해야 하는 ‘라일리’를 위해 그 어느 때 보다 바쁘게 감정의 신호를 보내지만 우연한 실수로 ‘기쁨’과 ‘슬픔’이 본부를 이탈하게 되자 ‘라일리’의 마음 속에 큰 변화가 찾아온다.',
    url: 'https://search.naver.com/search.naver?where=nexearch&sm=tab_clk.sym&mra=bjVI^bkEw&x_csa=%7B%22theme%22%3A%22movie%22%2C%22ptn%22%3A%22osolution_top%22%2C%22pkid%22%3A%2268%22%2C%22osid%22%3A%221848477%22%2C%22skipOsid%22%3A%2232619620%22%2C%22research%22%3A%220%22%2C%22oOs%22%3A%2232856000%22%2C%22topic%22%3A%22%EC%98%81%ED%99%94%22%7D&pkid=68&os=1848477&qvt=0&query=%EC%98%81%ED%99%94%20%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C%EC%95%84%EC%9B%831&x_bifrost=%7B%22theme%22%3A%22movie%22%2C%22pkid%22%3A%2268%22%2C%22os%22%3A%221848477%22%7D',
  },
  {
    rank: 5,
    title: '사운드 오브 뮤직',
    poster: '../images/soundofmusic.jpeg',
    description:
      '음악을 사랑하는 말괄량이 견습 수녀 ‘마리아’는 원장 수녀의 권유로 해군 명문 집안 폰 트랩가의 가정교사가 된다. ‘마리아’는 좀처럼 마음의 문을 열지 않는 폰 트랩가의 일곱 아이들에게 노래를 가르치며 점차 교감하게 되고, 엄격한 ‘폰 트랩 대령’ 역시 마음의 문을 열게 된다. 그러던 어느 날, ‘마리아’는 자신이 ‘폰 트랩 대령’을 사랑하고 있다는 사실을 깨닫게 되고, 자신만의 비밀을 간직한 채 아이들의 곁을 떠나 다시 수녀원에 들어가기로 결심하는데…',
    url: 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EC%82%AC%EC%9A%B4%EB%93%9C%EC%98%A4%EB%B8%8C%EB%AE%A4%EC%A7%81&oquery=%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C+%EC%95%84%EC%9B%83+1+%ED%8F%AC%ED%86%A0&tqi=iO8vzdpzL8VssLdD920ssssstLC-318113',
  },
];

function makeMovieLists(movies) {
  const myMovies = document.querySelector('.my-movies');
  const sortedMovies = movies.sort((a, b) => a.rank - b.rank);
  myMovies.innerHTML = sortedMovies.map(makeMovieList).join('');
}

function makeMovieList({ rank, title, poster, description, url }) {
  return `<tr>
  <td><span class="movie-rank">${rank}</span></td>
  <td><span class="movie-title">${title}</span></td>
  <td class="movie-poster__table"><img src="${poster}" alt="${title} 포스터" class="movie-poster" /></td>
  <td class="movie-description">${description}</td>
  <td><a href="${url}" class="movie-url">클릭</a></td>
</tr>`;
}

makeMovieLists(movies);

function makeMovieCheckBoxes(movies) {
  const friendMovies = document.querySelector('.friend-movies');
  const movie_names = movies.map((movie) => movie.title);
  friendMovies.innerHTML = movie_names.map(makeMovieCheckBox).join('');
}

function makeMovieCheckBox(title) {
  return `<input type="checkbox" id="movie" class="movie__checkbox">
  <label for="movie">${title}</label>`;
}

makeMovieCheckBoxes(movies);

function alertSameFavoriteMovieCount() {
  const friendName = document.querySelector('.friend-name').value;
  const checkboxes = Array.from(document.querySelectorAll('.movie__checkbox'));
  const selectedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
  alert(`${friendName}님, 저와 ${selectedCount}개의 취향이 같으시네요!`);
}

const registerButton = document.querySelector('.register__button');

registerButton.addEventListener('click', alertSameFavoriteMovieCount);
