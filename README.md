
# 보험료 비교 웹사이트

## 구성
- `index.html`: GitHub Pages에 올릴 프론트엔드 파일입니다.
- `Code.gs`: Google Apps Script 코드입니다. Web App으로 배포해야 작동합니다.

## 사용 방법

### 1. Google Apps Script Web App 배포
1. https://script.google.com 접속
2. 새 프로젝트 만들기 > `Code.gs` 붙여넣기
3. `웹앱으로 배포` > 익명 사용자 접근 허용
4. 발급된 Web App URL을 `index.html`에 붙여넣기 (`YOUR_WEB_APP_ID` 위치)

### 2. GitHub Pages 배포
1. GitHub에 새 레포지토리 만들기 (예: `premium-compare`)
2. `index.html` 업로드
3. Settings > Pages > Deploy from branch (루트 디렉토리 선택)
4. 배포 완료 시 웹사이트 접속 가능
