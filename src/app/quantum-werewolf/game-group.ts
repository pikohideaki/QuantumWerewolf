export class GameGroup {
  id:        number;
  password:  string = '9999';
  name:      string = '';
  members:   string[] = [];
  timeStamp: Date;
  selected:  boolean = false;

  constructor( init_members? ) {
    this.id = Date.now();
    this.timeStamp = new Date( Date.now() );
    this.members = ( init_members || [] );
  }
}
