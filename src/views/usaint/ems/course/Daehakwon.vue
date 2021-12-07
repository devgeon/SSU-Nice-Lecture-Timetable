<template>
  <CourseTable v-bind:axios_params="axios_params">
    <div class="leftNav">
      <nav class="dm-menu">
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">경영대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">계약학과</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">유통물류학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">프로젝트경영학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">이노비즈니스학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">복지경영학과</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">외식경영학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">문화콘텐츠경영학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">의료관광경영학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">이노비즈니스학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">식음료경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">세일즈경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">이미지경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">복지경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">데이터전략경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">감성기술경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">디지털매니지먼트학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">비즈니스통상학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">중국비즈니스학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">프로젝트경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전자무역IT학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">금융·부동산학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전문경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">회계세무학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">서비스경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기술경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">노사관계학과</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">소프트웨어특성화대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">SW전공</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">SW공학전공</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">MOT전공</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">안전융합대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">안전환경융합공학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">스마트산업안전공학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">소방방재안전학과</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">일반대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">계약학과</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">프로젝트경영학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">경제학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">컴퓨터학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">IT융합학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">기업통상학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">AI·SW융합학과</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">국어국문학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">영어영문학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">독어독문학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">불어불문학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">중어중문학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">철학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">사학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">법학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">사회복지학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">행정학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정치외교학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">경제학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">무역학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">회계학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">수학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">물리학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">화학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보통계보험수리학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">화학공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">유기신소재파이버공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전자공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전기공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기계공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">산업정보시스템공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">건축학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보통신공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">IT정책경영학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">화학과와한국화학연구소</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">컴퓨터학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">평생교육학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">벤처중소기업학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">문예창작학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">생활체육학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">일어일문학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보사회학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">생명정보학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">미디어학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기독교학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">언론홍보학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">실내디자인학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">디지털방송학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">공업교육학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">문화콘텐츠학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">한국학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보통신융합학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">금융학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">융합소프트웨어학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">금융기술융합학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">IT유통물류학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">재난안전관리학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">글로벌법률학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기독교통일지도자학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">스마트웨어러블공학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">안보·공익경영학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">프로젝트경영학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">안전·보건융합공학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">융합전장시스템공학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">지능시스템학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">소프트웨어학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">방위산업학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">국방산업정책통상학</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보통신·소재융합학</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">산업기술정보대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">환경화학공학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기계공학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전기공학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전자및컴퓨터공학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">건축공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보통신공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">섬유패션공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">패션정보학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전자계산학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">동력공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">반도체공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">공업교육학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">산업·정보시스템공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">뷰티산업학과</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">산업기술정보대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">환경화학공학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기계공학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전기공학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전자및컴퓨터공학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">건축공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보통신공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">섬유패션공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">패션정보학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전자계산학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">동력공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">반도체공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">공업교육학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">산업·정보시스템공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">뷰티산업학과</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">중소기업대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">계약학과</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">벤처경영학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">프랜차이즈경영학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">통상산업학과</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">중소기업경영지도학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">소상공인창업경영학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">중소기업정책학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">벤처경영학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">중소기업국제무역학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">뷰티산업학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">프랜차이즈경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">중소기업노사지도학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">중소기업생산관리학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">중소기업정보관리학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">벤처경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">통일뉴프런티어경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">중소기업경영혁신학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">스마트패션웨어러블학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">글로벌기업통상학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">스타트업비즈니스학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">전시컨벤션경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">머천다이징경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">혁신코칭컨설팅학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">독서경영전략학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">글로벌앙트러프리너쉽학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">강소기업경영학과</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">정보과학대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
                <a class="dm-menu__itemLink">계약학과</a>
                <ul class="dm-menu__list">
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">정보보안학과</a>
                  </li>
                  <li class="dm-menu__item" tabindex="0">
                    <a class="dm-menu__itemLink">핀테크융합학과</a>
                  </li>
                </ul>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">소프트웨어공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">IT경영학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보통신학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보미디어학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">미디어학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정보보안학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">금융IT학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">글로벌ICT융합학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">IoT학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">인공지능학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">ICT테크노정책학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">산업정보시스템공학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">스마트미디어학과</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">노사관계대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">노사관계학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">노동경제학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">노동법학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">산업복지정책학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">노사조정학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">인력경영학과</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">사회복지대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">사회복지정책학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">안보정책학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">사회사업학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">교회사회사업학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">사회복지전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">노인복지전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">아동청소년복지전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">상담복지전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">가족치료전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">경제정책학과</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">장애인복지전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">정신보건복지전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">사회복지실천전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">사회적기업전공</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">교육대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">한국어교육전공</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">융합영재교육전공</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">커리어·학습코칭전공</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">상담교육심리전공</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">AI창의융합교육전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">교육문화정책전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">교육행정리더십전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">영어교육전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">IT미디어교육전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">유아교육전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">국어교육전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">수학교육전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">교육공학전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">평생교육HRD전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">조기영어교육전공</a>
              </li>
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">역사교육학전공</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="dm-menu__list">
          <li class="dm-menu__item dm-menu__item--hasMore" tabindex="0">
            <a class="dm-menu__itemLink">기독교학대학원</a>
            <ul class="dm-menu__list">
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">성서·신학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기독교상담학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기독교인문사회학과</a>
              </li> 
              <li class="dm-menu__item" tabindex="0">
                <a class="dm-menu__itemLink">기독교역사문화학과</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </CourseTable>
</template>
              

<script>
import { getCurrentUser } from "../../../../utils";
const currentUser = getCurrentUser();

export default {
  data() {
    return {
      axios_params: {
        page: "daehakwon",
        dept: (currentUser.dept >= 30000 ? currentUser.dept : 30003 ),
      },
    }
  }
};
</script>

<style scoped>
</style>
