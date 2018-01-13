export class GameGroup {
  id:        number;
  password:  string = '9999';
  name:      string = '';
  members:   string[] = [];
  timeStamp: Date;
  selected:  boolean = false;
  numberOfWerewolves: number = 1;

  voteOfOtherPlayersVisible: boolean = false;
  splitSeerAndVillagers: boolean = false;

  constructor( init_members? ) {
    this.id = Date.now();
    this.timeStamp = new Date( Date.now() );
    this.members = ( init_members || ['Alice', 'Bob', 'Charlie', 'Dave'] );
  }
}
