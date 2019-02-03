import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'abc company', 'http://dev.com', 'Ruby on Rails', 150, 120, 15,'pwinnington@pwinnington.com')
  proposalTwo: Proposal = new Proposal(44, 'bb comapny', 'http://dev.com', 'React', 150, 120, 15,'pwinnington@pwinnington.com')
  proposalThree: Proposal = new Proposal(99, 'lol company', 'http://dev.com', 'Angular', 150, 120, 15,'pwinnington@pwinnington.com')

proposals: Proposal[] = [this.proposalOne, 
this.proposalTwo, 
this.proposalThree]
}
