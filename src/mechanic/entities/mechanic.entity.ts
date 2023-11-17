import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserRole } from '../../shared/enums';
import { User } from 'src/users/entities';

@Entity('mechanics')
export class Mechanic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  businessName: string;

  @Column()
  businessAddress: string;

  @Column()
  cacNumber: string;

  @Column()
  workshopAddress: string;

  @Column()
  nationality: string;

  @Column()
  state: string;

  @Column()
  homeAddress: string;

  @Column()
  companyImage: string;

  @Column()
  idCardImage: string;

  @Column()
  businessPermitImage: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column('simple-array', { default: [UserRole.MECHANIC] })
  roles: UserRole[];
}