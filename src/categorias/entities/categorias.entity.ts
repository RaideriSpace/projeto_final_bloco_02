import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Produtos } from '../../produtos/entities/produtos.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tb_categorias')
export class Categorias {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  categoria_nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ type: 'text', nullable: false })
  descricao: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ type: 'boolean', default: false })
  precisaReceita: boolean;

  @ApiProperty()
  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'data_atualizacao' })
  dataAtualizacao: Date;

  @ApiProperty({ type: () => [Produtos] })
  @OneToMany(() => Produtos, (produtos) => produtos.categoria)
  produtos: Produtos[];
}
