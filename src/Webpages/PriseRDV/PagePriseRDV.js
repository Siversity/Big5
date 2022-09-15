// Impot React
import React from 'react';

import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid';

function PagePriseRDV() {

    return (
        <div className="container mt-4">
            <div class="row">

                {/* Calendrier */}
                <div class="col justify-content-center">
                    <FullCalendar
                        plugins= {[interactionPlugin, dayGridPlugin]}
                        initialView= "dayGridMonth"
                        validRange = {{
                            start: '2022-09-15',
                            end: null
                          }}
                        selectable= {true}
                        dateClick= {(date) => console.log(date)}
                    />
                </div>

                {/* Prise de RDV */}
                <div class="col">

                </div>
            </div>

        </div>
    );
}

export default PagePriseRDV;