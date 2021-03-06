import React from 'react'
import Slide from '../Slide'
import SchoolYear from '../SchoolYear'
import { assistancePrograms, organization } from '../../../config'
import { toSentenceSerial } from 'underscore.string'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class BeforeYouBegin extends React.Component {
  constructor (props) {
    super(props)
    this.handleCheckItOut = this.handleCheckItOut.bind(this)
  }

  @observable showExtraContent = false

  handleCheckItOut() {
    this.showExtraContent = true
  }

  render() {
    const assistanceProgramList =
      toSentenceSerial(assistancePrograms, ', ', ' or ')

    return (
      <Slide header="Before you begin" id="before-you-begin">
        <p>Before you begin, there are a few things you should know:</p>

        <p>If you received a letter from the school saying that your children were automatically approved (directly certified) for free meals for the <SchoolYear /> school year because someone in your household participates in {assistanceProgramList} then you do not need to submit an application. If there are other children in your household who weren’t listed in that letter, they also qualify for free meals, so contact the school as soon as possible to correct the mistake.</p>

        <p>We only need one application for all the children in your household that attend {organization.name}.</p>
        <p>Eligibility for free or reduced price school meal benefits is based on any one of these three things:</p>

        <ul>
          <li>your child’s individual status as foster, homeless, migrant or runaway, or</li>
          <li>participation in an assistance program by any member of your household, or</li>
          <li>your total household income in the month the application is filled out, or the month before</li>
        </ul>

        <p>If you are unsure of whether you will qualify, we encourage you to fill out an application anyway, and officials at {organization.name} will determine if you are eligible.</p>

        <p>If you do not qualify now, but for some reason your financial situation changes in the future, for example if you were to lose your job, you may apply at any time in the school year.</p>

        <p>Your US citizenship or immigration status does not affect your eligibility for free and reduced price benefits.</p>

        <p>The non-cash benefits received through the school meal programs are not subject to public charge consideration. In other words, you will not be deported, denied entry to the country, or denied permanent status because you apply for or receive school meal benefits.</p>

        <p>If you have questions at any point during the application, click the question mark icon to get help with the current section.</p>

        <h3>Things you'll need</h3>

        <p>Lastly, we compiled a list of the information you might need to complete the application. <a onClick={this.handleCheckItOut}>Check it out!</a></p>

        {!!this.showExtraContent &&
         <div>
           <p>If you have this information handy, it will make the application process fast and easy.</p>
           <ul>
             <li>If you participate in {assistanceProgramList} you will need to know your case number (not your card or account number).</li>
             <li>
               If you do not participate in any of the above assistance program, you will need to report your total household income. In that case…
               <ul>
                 <li>if anyone in your house has a job, you may need to reference the earnings statements or pay stubs to report your gross income, which is different than the amount in your paycheck.</li>
                 <li>if anyone receives Social Security or retirement benefits, you may need to gather the benefit statements to report the amount and frequency of the payments.</li>
                 <li>you may also need to reference other financial documents for additional sources of income.</li>
               </ul>
             </li>
           </ul>
           <p>Still not sure if you have everything you need? Don’t worry. The income section of the application contains detailed instructions and explanations about the sources of income you must include, and you can gather additional information then.</p>
         </div>
        }
      </Slide>
    )
  }
}

export default BeforeYouBegin
