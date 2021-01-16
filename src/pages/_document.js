/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/fav/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/fav/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/fav/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/fav/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/fav/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/fav/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/fav/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/fav/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/fav/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/fav/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/fav/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/fav/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/fav/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/fav/manifest.json" />
          <meta name="msapplication-TileColor" content="#fafafa" />
          <meta
            name="msapplication-TileImage"
            content="/static/fav/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#fafafa" />
          <style global jsx>{`
            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-Light.eot');
              src: local('Montserrat Light'),
                local('/static/fonts/Montserrat-Light'),
                url('/static/fonts/Montserrat-Light.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-Light.woff') format('woff'),
                url('/static/fonts/Montserrat-Light.ttf') format('truetype');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-MediumItalic.eot');
              src: local('Montserrat Medium Italic'),
                local('/static/fonts/Montserrat-MediumItalic'),
                url('/static/fonts/Montserrat-MediumItalic.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-MediumItalic.woff') format('woff'),
                url('/static/fonts/Montserrat-MediumItalic.ttf')
                  format('truetype');
              font-weight: 500;
              font-style: italic;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-Thin.eot');
              src: local('Montserrat Thin'),
                local('/static/fonts/Montserrat-Thin'),
                url('/static/fonts/Montserrat-Thin.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-Thin.woff') format('woff'),
                url('/static/fonts/Montserrat-Thin.ttf') format('truetype');
              font-weight: 100;
              font-style: normal;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-ExtraLightItalic.eot');
              src: local('Montserrat ExtraLight Italic'),
                local('/static/fonts/Montserrat-ExtraLightItalic'),
                url('/static/fonts/Montserrat-ExtraLightItalic.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-ExtraLightItalic.woff')
                  format('woff'),
                url('/static/fonts/Montserrat-ExtraLightItalic.ttf')
                  format('truetype');
              font-weight: 200;
              font-style: italic;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-BoldItalic.eot');
              src: local('Montserrat Bold Italic'),
                local('/static/fonts/Montserrat-BoldItalic'),
                url('/static/fonts/Montserrat-BoldItalic.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-BoldItalic.woff') format('woff'),
                url('/static/fonts/Montserrat-BoldItalic.ttf')
                  format('truetype');
              font-weight: bold;
              font-style: italic;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-SemiBold.eot');
              src: local('Montserrat SemiBold'),
                local('/static/fonts/Montserrat-SemiBold'),
                url('/static/fonts/Montserrat-SemiBold.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-SemiBold.woff') format('woff'),
                url('/static/fonts/Montserrat-SemiBold.ttf') format('truetype');
              font-weight: 600;
              font-style: normal;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-ExtraLight.eot');
              src: local('Montserrat ExtraLight'),
                local('/static/fonts/Montserrat-ExtraLight'),
                url('/static/fonts/Montserrat-ExtraLight.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-ExtraLight.woff') format('woff'),
                url('/static/fonts/Montserrat-ExtraLight.ttf')
                  format('truetype');
              font-weight: 200;
              font-style: normal;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-ExtraBoldItalic.eot');
              src: local('Montserrat ExtraBold Italic'),
                local('/static/fonts/Montserrat-ExtraBoldItalic'),
                url('/static/fonts/Montserrat-ExtraBoldItalic.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-ExtraBoldItalic.woff')
                  format('woff'),
                url('/static/fonts/Montserrat-ExtraBoldItalic.ttf')
                  format('truetype');
              font-weight: 800;
              font-style: italic;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-Italic.eot');
              src: local('Montserrat Italic'),
                local('/static/fonts/Montserrat-Italic'),
                url('/static/fonts/Montserrat-Italic.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-Italic.woff') format('woff'),
                url('/static/fonts/Montserrat-Italic.ttf') format('truetype');
              font-weight: normal;
              font-style: italic;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-Bold.eot');
              src: local('Montserrat Bold'),
                local('/static/fonts/Montserrat-Bold'),
                url('/static/fonts/Montserrat-Bold.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-Bold.woff') format('woff'),
                url('/static/fonts/Montserrat-Bold.ttf') format('truetype');
              font-weight: bold;
              font-style: normal;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-LightItalic.eot');
              src: local('Montserrat Light Italic'),
                local('/static/fonts/Montserrat-LightItalic'),
                url('/static/fonts/Montserrat-LightItalic.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-LightItalic.woff') format('woff'),
                url('/static/fonts/Montserrat-LightItalic.ttf')
                  format('truetype');
              font-weight: 300;
              font-style: italic;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-BlackItalic.eot');
              src: local('Montserrat Black Italic'),
                local('/static/fonts/Montserrat-BlackItalic'),
                url('/static/fonts/Montserrat-BlackItalic.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-BlackItalic.woff') format('woff'),
                url('/static/fonts/Montserrat-BlackItalic.ttf')
                  format('truetype');
              font-weight: 900;
              font-style: italic;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-SemiBoldItalic.eot');
              src: local('Montserrat SemiBold Italic'),
                local('/static/fonts/Montserrat-SemiBoldItalic'),
                url('/static/fonts/Montserrat-SemiBoldItalic.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-SemiBoldItalic.woff')
                  format('woff'),
                url('/static/fonts/Montserrat-SemiBoldItalic.ttf')
                  format('truetype');
              font-weight: 600;
              font-style: italic;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-Regular.eot');
              src: local('Montserrat Regular'),
                local('/static/fonts/Montserrat-Regular'),
                url('/static/fonts/Montserrat-Regular.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-Regular.woff') format('woff'),
                url('/static/fonts/Montserrat-Regular.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-Medium.eot');
              src: local('Montserrat Medium'),
                local('/static/fonts/Montserrat-Medium'),
                url('/static/fonts/Montserrat-Medium.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-Medium.woff') format('woff'),
                url('/static/fonts/Montserrat-Medium.ttf') format('truetype');
              font-weight: 500;
              font-style: normal;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-ExtraBold.eot');
              src: local('Montserrat ExtraBold'),
                local('/static/fonts/Montserrat-ExtraBold'),
                url('/static/fonts/Montserrat-ExtraBold.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-ExtraBold.woff') format('woff'),
                url('/static/fonts/Montserrat-ExtraBold.ttf') format('truetype');
              font-weight: 800;
              font-style: normal;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-Black.eot');
              src: local('Montserrat Black'),
                local('/static/fonts/Montserrat-Black'),
                url('/static/fonts/Montserrat-Black.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-Black.woff') format('woff'),
                url('/static/fonts/Montserrat-Black.ttf') format('truetype');
              font-weight: 900;
              font-style: normal;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url('/static/fonts/Montserrat-ThinItalic.eot');
              src: local('Montserrat Thin Italic'),
                local('/static/fonts/Montserrat-ThinItalic'),
                url('/static/fonts/Montserrat-ThinItalic.eot?#iefix')
                  format('embedded-opentype'),
                url('/static/fonts/Montserrat-ThinItalic.woff') format('woff'),
                url('/static/fonts/Montserrat-ThinItalic.ttf')
                  format('truetype');
              font-weight: 100;
              font-style: italic;
            }

            body {
              font-family: 'Montserrat', Tahoma;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
