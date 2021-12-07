import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data";
import EventList from '../../components/events/event-list'
import { Fragment } from "react";
import ResultTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from '../../components/ui/error-alert'

export default function FilteredEventPage() {
    const router = useRouter();

    const filterData = router.query.slug;//Array with Elements after each '/'

    //if filterData is undefined
    if(!filterData){
        return <p className='center'>Loading...</p>
        // center is defined in global css, it is not a scoped class
    }

    const filteredYear = filterData[0];//String returned always
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;//Transforms data from string to number
    const numMonth = +filteredMonth;

    //If something other then a number is passed in url
    if(isNaN(numYear) || isNaN(numYear) || numYear>2030 || numYear<2021 || numMonth<1 || numMonth>12){
        return (
            <Fragment>
                <ErrorAlert><p>Invalid filter, Please adject value</p></ErrorAlert>
                <div className='center'><Button link='/events'>Show All Elements</Button></div>
            </Fragment>
        )
    }

    const filteredEvents = getFilteredEvents({year:numYear, month:numMonth});

    if(!filteredEvents || filteredEvents.length===0){
        return (
            <Fragment>
                <ErrorAlert><p>No Events found for the chosen filter!</p></ErrorAlert>
                <div className='center'><Button link='/events'>Show All Elements</Button></div>
            </Fragment>
        ) 
    }

    const date = new Date(numYear, numMonth-1);

    return (
      <Fragment>
        <ResultTitle date={date}/>
        <EventList items={filteredEvents}/>
      </Fragment>
    );
  }
  