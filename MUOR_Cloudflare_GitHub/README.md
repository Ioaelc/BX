# MUOR · Cloudflare Pages + GitHub

기존 디자인, 3D 재질·텍스처, BGM 반복 재생을 포함한 정적 사이트입니다.

## GitHub 업로드
1. ZIP을 압축 해제합니다.
2. 저장소 BX의 첫 화면에서 Add file → Upload files를 선택합니다.
3. 이 파일과 나란히 있는 `public` 폴더와 `README.md`를 올립니다.
4. Commit changes로 저장합니다. 저장소 첫 화면에 `public` 폴더가 보여야 합니다.
5. ZIP 자체나 이 파일을 감싸는 바깥 폴더를 올리지 마세요.

기존 MUOR_웹사이트_간격_자동 재생 폴더는 그대로 두어도 됩니다. Cloudflare는 public 폴더만 배포합니다.

## Cloudflare Pages 연결
1. Workers & Pages → Create application → Pages → Connect to Git / Import an existing Git repository
2. GitHub 연결 및 승인. 가능하면 Only select repositories에서 BX만 선택합니다.
3. BX 선택 → Begin setup
4. 다음 값을 입력합니다.

| 항목 | 값 |
| --- | --- |
| 프로젝트 이름 | muor-orda 또는 사용 가능한 이름 |
| Production branch | GitHub 기본 브랜치 (보통 main) |
| Framework preset | None |
| Build command | exit 0 |
| Build output directory | public |
| Root directory (advanced) | 비워두기 (저장소 최상위) |
| 환경 변수 | 추가하지 않음 |

5. Save and Deploy를 누릅니다. 완료 화면의 pages.dev 링크로 접속합니다.

GitHub Pages를 따로 켤 필요가 없습니다. 이전에 Direct Upload로 만든 Cloudflare 프로젝트 대신 Git 연결용 새 Pages 프로젝트를 생성하세요.

## 확인
- 첫 화면·스크롤 그래픽·설화 탭 확인
- 설화: 단군 → 구운몽 → 만파식적 → 주몽
- 3D 모델 로딩, 회전, 확대/축소 확인
- BGM 반복 재생 확인. 브라우저 정책상 첫 클릭/터치가 필요할 수 있으며 SOUND ON 버튼으로 켤 수 있습니다.

이후 public 안의 파일을 GitHub에서 변경하고 커밋하면 Cloudflare가 다시 배포합니다.
HTML 파일을 직접 더블클릭하면 모듈·3D 로딩이 제한될 수 있으므로 pages.dev 주소로 확인하세요.

공식 안내:
https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
https://developers.cloudflare.com/pages/get-started/git-integration/
