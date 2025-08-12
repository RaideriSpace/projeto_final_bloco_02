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

@Entity('tb_categorias')
export class Categorias {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  categoria_nome: string;

  @IsNotEmpty()
  @Column({ type: 'text', nullable: false })
  descricao: string;

  @IsNotEmpty()
  @Column({ type: 'boolean', default: false })
  precisaReceita: boolean;

  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao: Date;

  @UpdateDateColumn({ name: 'data_atualizacao' })
  dataAtualizacao: Date;

  @OneToMany(() => Produtos, (produtos) => produtos.categoria)
  produtos: Produtos[];
}
