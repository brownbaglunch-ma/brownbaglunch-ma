import React from 'react';

function Home() {
  
    return (
      <>
      <header className="masthead">
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-10 align-self-end">
                    <h1 className="text-uppercase text-white font-weight-bold">Brown Bag Lunch Morocco</h1>
                    <hr className="divider my-4"/>
                </div>
                <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 font-weight-light mb-5">Invitez les experts de votre ville vous parler de vos sujets préférés pendant le repas de midi.</p>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Trouver des baggers</a>
                </div>
            </div>
        </div>
      </header>

      <section className="page-section bg-primary" id="about">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">Nous avons ce qu'il vous faut</h2>
                    <hr className="divider light my-4"/>
                    <p className="text-white-50 mb-4">Que vous ayez envie d'apprendre plus sur un sujet avant de vous lancer dedans ou bien avoir l'avis d'un expert sur un sujet bien spécifique pour le prix d'un repas, c'est tout à faire faisable ici :)</p>
                    <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Trouver des Baggers</a>
                </div>
            </div>
        </div>
    </section>

    <section className="page-section" id="services">
        <div className="container">
            <h2 className="text-center mt-0">Comment ça marche ?</h2>
            <hr className="divider my-4"/>
            <div className="row">
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="mt-5">
                        <i className="fas fa-4x fa-user-check text-primary mb-4"></i>
                        <h3 className="h4 mb-2">Trouvez les Baggers</h3>
                        <p className="text-muted mb-0">Trouvez l'expert qu'il vous faut, prenez contact direct.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="mt-5">
                        <i className="fas fa-4x fa-utensils text-primary mb-4"></i>
                        <h3 className="h4 mb-2">Offrez le repas</h3>
                        <p className="text-muted mb-0">Les Baggers viennent chez vous, manger un repas et partager leur expertise.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="mt-5">
                        <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                        <h3 className="h4 mb-2">Apprenez dans la convivialité</h3>
                        <p className="text-muted mb-0">Profitez de l'expert pour apprendre ce que vous voulez et partager un bon moment autour d'un bon repas</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <footer className="bg-light py-5">
          <div className="container">
              <div className="small text-center text-muted">Copyright &copy; 2020 - Brown Bag Lunch Morocco</div>
          </div>
      </footer>
      </>
    );
}

export default Home;