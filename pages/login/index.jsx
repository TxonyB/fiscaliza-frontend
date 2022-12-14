import { Helmet } from "react-helmet"

export default function Component() {

  var suap = new SuapClient(SUAP_URL, CLIENT_ID, REDIRECT_URI, SCOPE)
  suap.init()
  $(document).ready(function () {
    $('#botao-login-suap').attr('href', suap.getLoginURL())
  })
  return (
    <>
      <Helmet>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
          crossorigin="anonymous"
          async
        ></script>
        <script
          src="./js.cookie.js"
          crossorigin="anonymous"
          async
        ></script>
        <script
          src="./client.js"
          crossorigin="anonymous"
          async
        ></script>
        <script
          src="./settings.js"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Login</h5>
                <p className="card-text">
                  Para acessar o sistema, você precisa fazer login com sua conta
                  do SUAP.
                </p>
                <a
                  id="botao-login-suap"
                  href="index.html"
                  className="btn btn-primary"
                >
                  Login com SUAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}