// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Script from "next/script";
import React from "react";

const Scripts = React.memo(() => {
  return (
    <>
      <Script strategy="afterInteractive" id="baidu-config">
        { `
          var _hmt = _hmt || [];
          (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?c7bd4f6c60c942f4b1c437b317f4f234";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
          })(); 
        `}
      </Script>
    </>
  );
});

Scripts.displayName = "Scripts";

export default Scripts;
