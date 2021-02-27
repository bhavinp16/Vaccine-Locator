import React from 'react'
import { Link } from 'react-router-dom'
import './bodyhomepage.css'

function Bodyhomepage() {
    return (
        <div className=" flex w-100 h-100 text-center ">
            <div className="bg-dark w-100 p-3 mx-auto flex-column text mt-auto text-white-50">
                <header className="mb-auto">
                    <div>
                        <h3 className="float-md-start mb-0 text-white">Vaccine Locator</h3>
                    </div>
                </header>

                <main class="px-3">
                    <h1>Vaccines Saves Lives At Every Stage Of Time </h1>
                    <p class="lead"></p>
                    <p class="lead">
                        <Link to="/map" href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Find Vaccine Centres near you</Link>
                    </p>
                </main>

            </div>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <footer class="mt-auto text-dark ">
                    <div className=" flex-row ">
                        <div className="flex"><h3>What is vaccination?</h3>
                            <p>
                                Vaccination is a simple, safe, and effective way of protecting people against harmful diseases, before they come into contact with them. It uses your body’s natural defenses to build resistance to specific infections and makes your immune system stronger.

                                Vaccines train your immune system to create antibodies, just as it does when it’s exposed to a disease. However, because vaccines contain only killed or weakened forms of germs like viruses or bacteria, they do not cause the disease or put you at risk of its complications.
                                Most vaccines are given by an injection, but some are given orally (by mouth) or sprayed into the nose.
                            </p>
                        </div>

                        <div className="flex">
                            <h3>Why is vaccination important?</h3>
                            <p>Vaccination is a safe and effective way to prevent disease and save lives – now more than ever. Today there are vaccines available to protect against at least 20 diseases, such as diphtheria, tetanus, pertussis, influenza and measles. Together, these vaccines save the lives of up to 3 million people every year.

                            When we get vaccinated, we aren’t just protecting ourselves, but also those around us. Some people, like those who are seriously ill, are advised not to get certain vaccines – so they depend on the rest of us to get vaccinated and help reduce the spread of disease.

                            During the COVID-19 pandemic, vaccination continues to be critically important. The pandemic has caused a decline in the number of children receiving routine immunizations, which could lead to an increase in illness and death from preventable diseases.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Bodyhomepage
