import axios from 'axios';
import KaKaoLogin from 'components/KaKaoLogin';
import Layout from 'components/Layout';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from 'constants/global';
import { Link } from 'gatsby-link';
import { useEffect, useState } from 'react';

const SignInPage = () => {
  const [testData, setTestData] = useState<string>('');

  useEffect(() => {
    axios
      .get('http://3.38.250.97/api/v1/main')
      .then((res) => setTestData(res.data));
  }, []);
  console.log(testData);

  return (
    <Layout title="로그인" hasFooter={false}>
      <div
        className={`w-full flex items-center flex-col px-6 space-y-8`}
        style={{
          height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px - 8px)`,
        }}
      >
        <div className="flex items-center justify-center w-32 h-32 mt-32 text-white rounded-full shadow bg-mainPurple">
          LOGO
        </div>
        <div>
          <Link to="http://3.38.250.97/oauth2/authorization/kakao">
            <KaKaoLogin />
          </Link>
          <div className="mt-1 text-center">회원가입</div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPage;