import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categorias } from '../../categorias/entities/categorias.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tb_produtos')
export class Produtos {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ type: 'text', nullable: false })
  descricao: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ nullable: false, default: 0 })
  estoque: number;

  @ApiProperty()
  @Column({ length: 255, nullable: true })
  principioAtivo: string;

  @ApiProperty()
  @Column({ length: 50, nullable: true })
  unidadeMedida: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  codigoDeBarras: string;

  @ApiProperty()
  @Column({ nullable: true })
  validadeDias: number;

  @ApiProperty()
  @CreateDateColumn()
  dataCadastro: Date;

  @ApiProperty()
  @UpdateDateColumn()
  dataAlteracao: Date;

  @ApiProperty({ type: () => Categorias })
  @ManyToOne(() => Categorias, (categoria) => categoria.produtos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categorias;
}
