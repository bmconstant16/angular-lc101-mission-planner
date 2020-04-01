import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentBeingEdited: string = null;

  equipment = ['Habitat dome', 'Drones', 'Food', 'Oxygen tanks']; 
 
  constructor() { }

  ngOnInit() {
  }

  add(equipmentItem: string) {
      this.equipment.push(equipmentItem);
    }

  edit(equipmentItem: string) {
      this.equipmentBeingEdited = equipmentItem;
   }

  save(updatedEquipment: string) {
    this.equipmentBeingEdited = updatedEquipment;
    this.equipmentBeingEdited = null
  }

  remove(equipment: string) {
    let index = this.equipment.indexOf(equipment);
    this.equipment.splice(index, 1);
  }
}
