<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="shortcut icon" href="icon.png">

  <title>InFoco</title>
</head>
<body class="contato">
  <div class="container contact-form">
    <div class="contact-image">
      <img src="imgs/email.png" alt="email-icon"/>
    </div>
    <form method="post">
      <h3>Entre em Contato</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input type="text" name="nome class="form-input" placeholder="Seu Nome *" required>
          </div>
          <div class="form-group">
            <input type="text" name="email" class="form-input" placeholder="Seu Email *" required>
          </div>
          <div class="form-group">
            <input type="text" name="assunto" class="form-input" placeholder="Assunto*" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <textarea name="mensagem" class="form-input" placeholder="Sua Mensagem *" style="width: 100%; height: 150px;"></textarea>
          </div>
        </div>
        <button class="btn btn-block enviar" type="submit">ENVIAR</button>
      </div>
    </form>
  </div> 

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
</body>
</html>