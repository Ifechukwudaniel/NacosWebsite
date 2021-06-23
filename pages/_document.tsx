import Document, { DocumentContext,Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(){
    return (
      <Html style={{width:"100%"}}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport"/>
          <link href="/static/css/normalize.css" rel="stylesheet" type="text/css"/>
          <link href="/static/css/webflow.css" rel="stylesheet" type="text/css"/>
          {/* <link href="static/css/styles.css" rel="stylesheet" type="text/css"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>

    );
  }
}

export default MyDocument