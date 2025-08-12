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

@Entity('tb_produtos')
export class Produtos {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'text', nullable: false })
  descricao: string;

  @IsNotEmpty()
  @Column({ nullable: false, default: 0 })
  estoque: number;

  @Column({ length: 255, nullable: true })
  principioAtivo: string;

  @Column({ length: 50, nullable: true })
  unidadeMedida: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  codigoDeBarras: string;

  @Column({ nullable: true })
  validadeDidas: number;

  @CreateDateColumn()
  dataCadastro: Date;

  @UpdateDateColumn()
  dataAlteracao: Date;

  @ManyToOne(() => Categorias, (categoria) => categoria.produtos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categorias;
}
